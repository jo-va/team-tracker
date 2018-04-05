const EARTH_RADIUS_KM = 6371.0;
const DEG2RAD = Math.PI / 180.0;

// Haversine distance
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (lat1 === null || lon1 === null || lat2 === null || lon2 === null) {
        return 0;
    }

    const dLat = (lat2 - lat1) * DEG2RAD;
    const dLon = (lon2 - lon1) * DEG2RAD;

    const lat1rad = (lat1) * DEG2RAD;
    const lat2rad = (lat2) * DEG2RAD;

    const sinDLat = Math.sin(dLat * 0.5);
    const sinDLon = Math.sin(dLon * 0.5);
    const a = sinDLat * sinDLat + sinDLon * sinDLon * Math.cos(lat1rad) * Math.cos(lat2rad);
    const c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));

    const dist = Math.abs(EARTH_RADIUS_KM * c);
    return Number.isFinite(dist) ? dist : 0;
};

export { calculateDistance };
