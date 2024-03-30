import { useEffect, useState } from "react";
import {
  AnonAadhaarProvider,
  useAnonAadhaar,
  LogInWithAnonAadhaar,
  useProver,
  AnonAadhaarProof,
} from "@anon-aadhaar/react";

import { useNavigate } from "react-router-dom";

const app_id = "557052232335049516014482965529112482384963436544";

function AnonButton() {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const navigate = useNavigate();

  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const checkLocalStorage = () => {
      const storedData = localStorage.getItem("anonAadhaar");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.status === "logged-in" && !activeState) {
          setActiveState(true);
          navigate("/approved");
        }
      }
    };
  
    const interval = setInterval(() => {
      checkLocalStorage();
    }, 1000); 
  
    return () => {
      clearInterval(interval);
    };
  }, [activeState, navigate]);
  


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div>
        <AnonAadhaarProvider
          _appId={app_id}
          _testing={true}
          _isWeb={false}
        >
          {activeState ? (
            <>
              <p>✅ Proof is valid</p>
              <p>Got your Aadhaar Identity Proof</p>
              <>Welcome anon!</>
              {latestProof && (
                <AnonAadhaarProof
                  code={JSON.stringify(JSON.parse(latestProof), null, 2)}
                />
              )}
            </>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LogInWithAnonAadhaar 
                nullifierSeed={1234} 
              />
            </div>
          )}
        </AnonAadhaarProvider>
      </div>
    </div>
  );
}

export default AnonButton;