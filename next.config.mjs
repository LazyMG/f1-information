/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ydeyecytfulakfmpwavz.supabase.co",
        port: "",
        pathname: "/**", // 이 부분은 모든 경로를 허용합니다.
      },
    ],
  },
};

export default nextConfig;
