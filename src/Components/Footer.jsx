export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}
