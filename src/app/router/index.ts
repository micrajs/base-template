export const RouterServiceProvider: Micra.ServiceProvider = {
  async boot() {
    await import('@/routes');
  },
};
