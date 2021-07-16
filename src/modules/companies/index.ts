import HttpClient from 'core/http-client';
import Base from 'modules/base';
import CompaniesInterface from 'types/companies.interface';

/**
 * @description Handles all companies related operations.
 *
 * @class Companies
 * @extends {Base}
 */
export default class Companies extends Base {
  private baseUrl = '/companies';

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * @description Creates a company
   * @param {string} name
   * @returns {Promise<CompaniesInterface>} - New created company
   */
  async create(company: CompaniesInterface): Promise<CompaniesInterface> {
    const { data } = await this.http.request<CompaniesInterface>({
      method: 'POST',
      url: this.baseUrl,
      data: company
    });

    return data;
  }
}