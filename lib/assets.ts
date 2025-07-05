/**
 * Get the correct asset path based on environment
 * @param path - The asset path (should start with /)
 * @returns The correct path with base path if needed
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // If path doesn't start with /, add it
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return basePath + path;
}

/**
 * Get the correct image path for project images
 */
export function getImagePath(imageName: string): string {
  return getAssetPath(`/${imageName}`);
}
