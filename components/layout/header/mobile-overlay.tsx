interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileOverlay({
  isOpen,
  onClose,
}: MobileOverlayProps) {
  return (
    <button
      type="button"
      aria-label="Close Mobile Menu"
      className={`mobile-overlay ${
        isOpen
          ? "mobile-overlay-visible"
          : ""
      }`}
      onClick={onClose}
    />
  );
}