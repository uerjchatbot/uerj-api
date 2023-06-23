"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUseCase = void 0;
class ListUseCase {
    constructor(comunicationRepository) {
        this.comunicationRepository = comunicationRepository;
    }
    async execute(query) {
        return await this.comunicationRepository.list({
            page: query.page ?? 1,
            limit: query.limit ?? 10,
            search: query.search,
            order: query.order ?? "asc",
        });
    }
}
exports.ListUseCase = ListUseCase;
//# sourceMappingURL=list.js.map