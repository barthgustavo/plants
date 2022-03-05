const world = 'world';

export function hello(world: string = "world2"): string {
  return `Hello ${world}! `;
}