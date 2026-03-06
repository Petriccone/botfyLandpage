/** Convert lat/lng to 3D sphere coordinates */
export function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ]
}

export const COUNTRY_COORDS: [number, number][] = [
  // Americas
  [-23.55, -46.63],  // São Paulo
  [-22.91, -43.17],  // Rio de Janeiro
  [-15.78, -47.93],  // Brasília
  [-3.72, -38.52],   // Fortaleza
  [-12.97, -38.51],  // Salvador
  [-25.43, -49.27],  // Curitiba
  [-30.03, -51.23],  // Porto Alegre
  [19.43, -99.13],   // Mexico City
  [-34.61, -58.38],  // Buenos Aires
  [4.71, -74.07],    // Bogotá
  [-12.05, -77.04],  // Lima
  [-33.45, -70.67],  // Santiago
  [40.71, -74.01],   // New York
  [37.77, -122.42],  // San Francisco
  [25.76, -80.19],   // Miami
  [43.65, -79.38],   // Toronto
  [10.49, -66.88],   // Caracas
  [-0.18, -78.47],   // Quito
  [-34.88, -56.17],  // Montevideo
  [-25.26, -57.58],  // Asunción
  [14.63, -90.51],   // Guatemala City
  [9.93, -84.08],    // San José (CR)
  // Europe
  [51.51, -0.13],    // London
  [48.86, 2.35],     // Paris
  [52.52, 13.41],    // Berlin
  [40.42, -3.70],    // Madrid
  [41.90, 12.50],    // Rome
  [38.72, -9.14],    // Lisbon
  [59.33, 18.07],    // Stockholm
  [55.68, 12.57],    // Copenhagen
  [52.37, 4.90],     // Amsterdam
  [50.85, 4.35],     // Brussels
  [47.37, 8.54],     // Zurich
  [48.21, 16.37],    // Vienna
  [50.08, 14.44],    // Prague
  [37.98, 23.73],    // Athens
  [44.43, 26.10],    // Bucharest
  [42.70, 23.32],    // Sofia
  // Asia & Middle East
  [35.68, 139.69],   // Tokyo
  [37.57, 126.98],   // Seoul
  [22.32, 114.17],   // Hong Kong
  [1.35, 103.82],    // Singapore
  [13.76, 100.50],   // Bangkok
  [25.20, 55.27],    // Dubai
  [24.71, 46.68],    // Riyadh
  [41.01, 28.98],    // Istanbul
  [31.23, 121.47],   // Shanghai
  [28.61, 77.21],    // New Delhi
  [19.08, 72.88],    // Mumbai
  // Africa & Oceania
  [-33.93, 18.42],   // Cape Town
  [30.04, 31.24],    // Cairo
  [6.52, 3.38],      // Lagos
  [-1.29, 36.82],    // Nairobi
  [-33.87, 151.21],  // Sydney
  [-36.85, 174.76],  // Auckland
]
