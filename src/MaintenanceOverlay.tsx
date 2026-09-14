import React, { useState } from "react";

interface MaintenanceOverlayProps {
  children: React.ReactNode;
}

const MaintenanceOverlay: React.FC<MaintenanceOverlayProps> = ({
  children,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const continueToSite = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsHidden(true);
    }, 400);
  };

  return (
    <>
      {children}

      {!isHidden && (
        <div
          className={`maintenance-overlay ${
            isClosing ? "maintenance-overlay--hide" : ""
          }`}
        >
          <div className="maintenance-box">
            <div className="maintenance-icon">🚧</div>

            <h1>Site Under Maintenance</h1>

            <p>
              We're currently performing some maintenance and updates.
              You can continue to the site below.
            </p>

            <button
              type="button"
              className="continue-btn"
              onClick={continueToSite}
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}

      <style>{`
        .maintenance-overlay {
          position: fixed;
          inset: 0;
          z-index: 999999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 24px;

          background: #111827;
          color: #ffffff;

          text-align: center;

          opacity: 1;
          visibility: visible;
        }

        .maintenance-box {
          width: 100%;
          max-width: 600px;
        }

        .maintenance-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .maintenance-box h1 {
          margin: 0 0 16px;

          font-family: Arial, sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
        }

        .maintenance-box p {
          margin: 0 auto 30px;

          max-width: 520px;

          font-family: Arial, sans-serif;
          font-size: 18px;
          line-height: 1.6;

          color: #d1d5db;
        }

        .continue-btn {
          border: none;
          border-radius: 8px;

          padding: 14px 28px;

          background: #3b82f6;
          color: #ffffff;

          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .continue-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        }

        .continue-btn:active {
          transform: translateY(0);
        }

        .continue-btn:focus-visible {
          outline: 3px solid rgba(96, 165, 250, 0.6);
          outline-offset: 3px;
        }

        .maintenance-overlay--hide {
          animation: maintenanceFadeOut 0.4s ease forwards;
        }

        @keyframes maintenanceFadeOut {
          from {
            opacity: 1;
            visibility: visible;
          }

          to {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }

        @media (max-width: 600px) {
          .maintenance-overlay {
            padding: 20px;
          }

          .maintenance-icon {
            font-size: 52px;
          }

          .maintenance-box h1 {
            font-size: 32px;
          }

          .maintenance-box p {
            font-size: 16px;
          }

          .continue-btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default MaintenanceOverlay;
