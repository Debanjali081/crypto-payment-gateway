export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} CryptoPay. All rights reserved.
    </footer>
  );
}
