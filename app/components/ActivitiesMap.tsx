"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { ActivityItem } from "../data/activities";
import { HiLocationMarker, HiCalendar, HiUserGroup, HiExternalLink } from "react-icons/hi";

// Map Recenter Helper Component
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
}

// Custom Leaflet DivIcon for pins
const createCustomIcon = (isSelected: boolean, category: string) => {
  const colorClass =
    category === "faculty"
      ? "from-blue-500 to-indigo-600"
      : category === "volunteer"
      ? "from-emerald-400 to-teal-600"
      : category === "academic"
      ? "from-amber-400 to-orange-500"
      : "from-purple-500 to-pink-600";

  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div class="relative flex items-center justify-center">
        <div class="w-9 h-9 rounded-full bg-gradient-to-tr ${colorClass} p-0.5 shadow-lg shadow-black/50 ${
      isSelected ? "scale-125 ring-4 ring-emerald-400 animate-bounce" : "hover:scale-110"
    } transition-all duration-300">
          <div class="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-emerald-400">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
};

type MapProps = {
  activities: ActivityItem[];
  selectedActivityId: string | null;
  onSelectActivity: (activity: ActivityItem) => void;
};

export default function ActivitiesMap({
  activities,
  selectedActivityId,
  onSelectActivity,
}: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[450px] rounded-2xl bg-surface/50 border border-border flex items-center justify-center text-text-muted">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-sm">กำลังโหลดแผนที่กิจกรรม...</span>
        </div>
      </div>
    );
  }

  // Default Center: Chiang Mai / Maejo University area
  const defaultCenter: [number, number] = [18.8931, 99.0143];

  const selectedActivity = activities.find((a) => a.id === selectedActivityId);
  const activeCenter: [number, number] = selectedActivity
    ? selectedActivity.coordinates
    : defaultCenter;
  const activeZoom = selectedActivity ? 12 : 9;

  return (
    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-border shadow-2xl z-10">
      <MapContainer
        center={activeCenter}
        zoom={activeZoom}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <ChangeView center={activeCenter} zoom={activeZoom} />
        {/* CartoDB Dark Matter tiles for dark theme */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {activities.map((act) => (
          <Marker
            key={act.id}
            position={act.coordinates}
            icon={createCustomIcon(act.id === selectedActivityId, act.category)}
            eventHandlers={{
              click: () => onSelectActivity(act),
            }}
          >
            <Popup className="custom-leaflet-popup">
              <div className="p-1 max-w-xs text-foreground font-sans">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mb-1">
                  <HiLocationMarker /> {act.locationName}
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 leading-snug">
                  {act.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {act.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-[11px] text-gray-500 flex items-center gap-1">
                    <HiCalendar /> {act.date}
                  </span>
                  <button
                    onClick={() => onSelectActivity(act)}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5"
                  >
                    ดูรายละเอียด <HiExternalLink />
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating map banner overlay */}
      <div className="absolute bottom-4 left-4 z-[400] glass px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2 text-xs text-text-secondary">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>คลิกที่พินปักหมุดบนแผนที่เพื่อเลือกกิจกรรม</span>
      </div>
    </div>
  );
}
