import { useState, useContext, createContext, FunctionComponent, useCallback } from 'react';
import { Pet } from '../interface/Pet';

interface IPetContext {
  currentPet: Pet | undefined;
  pets: Pet[] | undefined;
  updatePetContext: (data: Pet[]) => void;
  updateCurrentPet: (data: Pet | undefined) => void;
}

export const PetContext = createContext<IPetContext>({
  currentPet: undefined,
  pets: [],
  updatePetContext: () => null,
  updateCurrentPet: () => null,
});

export const PetProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [pets, setPets] = useState<Pet[] | undefined | []>();
  const [currentPet, setCurrentPet] = useState<Pet | undefined>(undefined);
  const updatePetContext = useCallback((data: Pet[] | []) => {
    setPets(data);
  }, []);
  const updateCurrentPet = (data: Pet | undefined) => {
    setCurrentPet(data);
  };

  return (
    <PetContext.Provider value={{ currentPet, pets, updatePetContext, updateCurrentPet }}>
      {children}
    </PetContext.Provider>
  );
};

export function usePet(): IPetContext {
  return useContext(PetContext);
}
