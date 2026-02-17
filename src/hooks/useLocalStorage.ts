import { useState, useEffect } from 'react';

/**
 * Custom hook for managing local storage
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

/**
 * Custom hook for managing user preferences
 */
export function useUserPreferences() {
  const [preferences, setPreferences] = useLocalStorage('userPreferences', {
    theme: 'light',
    notifications: true,
    language: 'en',
  });

  const updatePreference = (key: string, value: any) => {
    setPreferences((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    preferences,
    updatePreference,
  };
}

/**
 * Custom hook for managing learning progress
 */
export function useLearningProgress() {
  const [progress, setProgress] = useLocalStorage('learningProgress', {
    currentPhase: 0,
    completedPhases: [],
    totalContributions: 0,
  });

  const completePhase = (phaseId: number) => {
    setProgress((prev: any) => ({
      ...prev,
      completedPhases: [...prev.completedPhases, phaseId],
      currentPhase: Math.max(prev.currentPhase, phaseId + 1),
    }));
  };

  const addContribution = () => {
    setProgress((prev: any) => ({
      ...prev,
      totalContributions: prev.totalContributions + 1,
    }));
  };

  return {
    progress,
    completePhase,
    addContribution,
  };
}
