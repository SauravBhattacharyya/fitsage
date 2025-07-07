export default function Footer() {
  return (
    <footer className="w-full py-6 px-2 md:px-10 text-start text-sm text-color-primary bg-white">
      <p>&copy; {new Date().getFullYear()} FitSage. All rights reserved.</p>
      <p className="mt-1">
        Built with ❤️ using AI to help you stay fit and healthy.
      </p>
      <p className="text-xs text-gray-500 mt-4 ">
        Disclaimer: FitSage provides AI-generated fitness and nutrition guidance
        for general wellness purposes only. It is not intended as medical
        advice, diagnosis, or treatment. Please consult a licensed healthcare
        provider.
      </p>
    </footer>
  );
}
