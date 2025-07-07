export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center background-color text-center p-6">
      <h1 className="text-4xl font-bold text-color-primary mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-color-secondary max-w-md">
        Oops! The page you&apos;re looking for doesn’t exist. Maybe try heading
        back to the dashboard or home.
      </p>
    </div>
  );
}
