import { useState } from "react";

interface MaintenanceOverlayProps {
  children: React.ReactNode;
}

const MaintenanceOverlay = ({
  children,
}: MaintenanceOverlayProps) => {
  const [showMaintenance, setShowMaintenance] = useState(true);

  const continueToSite = () => {
    setShowMaintenance(false);
  };

  return (
    <>
      {/* Your entire existing website stays underneath */}
      {children}

      {/* Maintenance screen */}
      {showMaintenance && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2147483647,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "24px",
            backgroundColor: "#111827",
            color: "#ffffff",

            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <div
              style={{
                fontSize: "64px",
                marginBottom: "20px",
              }}
            >
              🚧
            </div>

            <h1
              style={{
                margin: "0 0 16px",
                fontFamily: "Arial, sans-serif",
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#ffffff",
              }}
            >
              Site Under Maintenance
            </h1>

            <p
              style={{
                margin: "0 auto 30px",
                maxWidth: "520px",
                fontFamily: "Arial, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#d1d5db",
              }}
            >
              We're currently performing some maintenance and updates.
              You can continue to the site below.
            </p>

            <button
              type="button"
              onClick={continueToSite}
              style={{
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",

                backgroundColor: "#3b82f6",
                color: "#ffffff",

                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 700,

                cursor: "pointer",

                transition:
                  "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MaintenanceOverlay;
