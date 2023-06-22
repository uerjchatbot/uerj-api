import { CollectUseCase } from "App/UseCases/User/collect";

export function CollectFactory(): CollectUseCase {
  // const userRepository = new LucidUserRepository();
  const useCase = new CollectUseCase();

  return useCase;
}
