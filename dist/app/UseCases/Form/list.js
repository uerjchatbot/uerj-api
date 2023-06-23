"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUseCase = void 0;
class ListUseCase {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async execute(query) {
        return await this.formRepository.list({
            page: query.page ?? 1,
            limit: query.limit ?? 10,
            search: query.search,
            order: query.order ?? "asc",
        });
    }
}
exports.ListUseCase = ListUseCase;
//# sourceMappingURL=list.js.map