export function WelcomeView() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: `80%`,
      }}
    >
      <p style={{ textAlign: 'center' }}>
        Hi there, this application will help you conveniently store your contact
        numbers. Authentication required to use.
      </p>
    </div>
  );
}
