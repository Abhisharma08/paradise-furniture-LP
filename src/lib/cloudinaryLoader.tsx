"use client";

import Image, { ImageProps } from "next/image";

export function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.includes("cloudinary.com")) return src;

  const q = quality ? `q_${quality}` : "q_auto";
  const f = "f_auto";
  const w = `w_${width}`;
  const c = "c_limit";
  const transformations = [f, q, w, c].filter(Boolean).join(",");

  if (src.includes("/image/upload/")) {
    const parts = src.split("/image/upload/");
    const pathParts = parts[1].split("/");
    
    let versionIndex = pathParts.findIndex(p => /^v\d+$/.test(p));
    if (versionIndex === -1) {
      versionIndex = pathParts.findIndex(p => {
        return !p.includes("q_") && !p.includes("f_") && !p.includes("w_") && !p.includes("c_") && !p.includes("dpr_") && !p.includes("h_");
      });
    }

    const cleanPath = pathParts.slice(versionIndex).join("/");
    return `${parts[0]}/image/upload/${transformations}/${cleanPath}`;
  }

  if (src.includes("/images/")) {
    const parts = src.split("/images/");
    const pathParts = parts[1].split("/");
    
    let versionIndex = pathParts.findIndex(p => /^v\d+$/.test(p));
    if (versionIndex === -1) {
      versionIndex = pathParts.findIndex(p => {
        return !p.includes("q_") && !p.includes("f_") && !p.includes("w_") && !p.includes("c_") && !p.includes("dpr_") && !p.includes("h_");
      });
    }

    const cleanPath = pathParts.slice(versionIndex).join("/");
    return `${parts[0]}/images/${transformations}/${cleanPath}`;
  }

  return src;
}

interface CloudinaryImageProps extends Omit<ImageProps, "loader"> {}

export function CloudinaryImage({ src, ...props }: CloudinaryImageProps) {
  if (typeof src === "string" && src.includes("cloudinary.com")) {
    return <Image loader={cloudinaryLoader} src={src} {...props} />;
  }
  return <Image src={src} {...props} />;
}
