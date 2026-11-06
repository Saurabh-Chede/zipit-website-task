import { AlertCircle, ChevronRight } from 'lucide-react';

export default function KycBanner({ onProceed }) {
  return (
    <div className="kyc-banner" role="alert">
      <p className="kyc-banner__text">
        <span className="kyc-banner__label">
          <AlertCircle size={14} /> Please note:
        </span>
        KYC verification is mandatory for shipping yours orders. Complete your KYC to start
        shipping orders seamlessly.
      </p>
      <button className="kyc-banner__link" onClick={onProceed}>
        Proceed To Verify KYC <ChevronRight size={15} />
      </button>
    </div>
  );
}
