export const pageview = (gaMeasurementId: string, url: string) => {
  window.gtag('config', gaMeasurementId, {
    page_path: url,
  });
};
