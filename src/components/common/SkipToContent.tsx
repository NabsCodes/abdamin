// Skip to content link for accessibility
const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-base focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary-base focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
