// Add shared TypeScript types and interfaces here.
// Import from this file across the project rather than
// defining types inside component files.

export type ApiResponse<T> = {
  data: T;
  error: string | null;
};
