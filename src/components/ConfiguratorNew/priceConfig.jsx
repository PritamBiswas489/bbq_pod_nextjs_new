// priceConfig.jsx

export const MODEL_PRICES = {
  "A-Mini": 9999,
  "A-Plus": 15999,
  "A-Max": 17999,
};

export const APPLIANCE_PRICES = {
  "BBQ Grill": 0,
  Fridge: 1200,
  "Audio System": 600,
};

export const FEATURE_PRICES = {
  "RGB Lighting": 800,
  "Fish Pond": 2500,
  "Tool Storage": 900,
};

export const calculatePrice = (config) => {
  let total = 0;

  if (config.model) {
    total += MODEL_PRICES[config.model] || 0;
  }

  config.appliances.forEach((item) => {
    total += APPLIANCE_PRICES[item] || 0;
  });

  config.features.forEach((item) => {
    total += FEATURE_PRICES[item] || 0;
  });

  return total;
};
