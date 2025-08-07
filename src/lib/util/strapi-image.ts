/**
 * Utility function to convert Strapi relative image URLs to absolute URLs
 * @param url - The image URL from Strapi (can be relative or absolute)
 * @returns Absolute URL for the image
 */
export function getStrapiImageUrl(url: string | null | undefined): string {
  if (!url) {
    return '';
  }

  // If the URL is already absolute, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If it's a relative URL, prepend the Strapi base URL
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  // Ensure no double slashes
  const baseUrl = strapiUrl.endsWith('/') ? strapiUrl.slice(0, -1) : strapiUrl;
  const imagePath = url.startsWith('/') ? url : `/${url}`;
  
  return `${baseUrl}${imagePath}`;
}

/**
 * Get the best image format from Strapi formats object
 * @param formats - Strapi image formats object
 * @param preferredSize - Preferred size ('thumbnail', 'small', 'medium', 'large')
 * @returns URL for the best available format
 */
export function getStrapiImageFormat(
  formats: any,
  preferredSize: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string {
  if (!formats) {
    return '';
  }

  // Try to get the preferred size first
  if (formats[preferredSize]?.url) {
    return getStrapiImageUrl(formats[preferredSize].url);
  }

  // Fallback order: large -> medium -> small -> thumbnail
  const fallbackOrder = ['large', 'medium', 'small', 'thumbnail'];
  
  for (const size of fallbackOrder) {
    if (formats[size]?.url) {
      return getStrapiImageUrl(formats[size].url);
    }
  }

  return '';
}
