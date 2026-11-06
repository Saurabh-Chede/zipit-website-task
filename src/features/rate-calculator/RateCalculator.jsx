import { useState } from 'react';
import { Card, TextInput, Button } from '../../components/ui';

const PINCODE = /^[1-9][0-9]{5}$/;

export default function RateCalculator({ onCalculate }) {
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [error, setError] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value.replace(/\D/g, '').slice(0, 6));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!PINCODE.test(pickup) || !PINCODE.test(delivery)) {
      setError('Please enter valid 6-digit pincodes.');
      return;
    }
    onCalculate?.({ pickup, delivery });
  };

  return (
    <Card title="Calculate Your Shipping Rates">
      <form onSubmit={handleSubmit} noValidate>
        <div className="rate__pincodes">
          <div className="rate__field">
            <label htmlFor="pickup">
              <span className="rate__dot" /> Pickup Pincode
            </label>
            <TextInput
              id="pickup"
              inputMode="numeric"
              placeholder="Enter Pincode"
              value={pickup}
              onChange={handleChange(setPickup)}
            />
          </div>
          <div className="rate__connector" />
          <div className="rate__field">
            <label htmlFor="delivery">
              <span className="rate__dot rate__dot--pin" /> Delivery Pincode
            </label>
            <TextInput
              id="delivery"
              inputMode="numeric"
              placeholder="Enter Pincode"
              value={delivery}
              onChange={handleChange(setDelivery)}
            />
          </div>
        </div>
        {error && <p className="rate__error">{error}</p>}
        <Button type="submit" variant="outline" block className="rate__submit">
          Calculate Rates
        </Button>
      </form>
    </Card>
  );
}
