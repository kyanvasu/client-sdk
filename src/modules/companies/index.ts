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

  /**
   * @description Updates a company by its Id (Differencial update)
   * @param {number} companyId - Company Id to perform the update
   * @param {CompaniesInterface} company - An company object with the update changes to perform to the company
   * @returns {Promise<CompaniesInterface>} - Updated company object
   */
  async update(companyId: number, company: CompaniesInterface): Promise<CompaniesInterface> {
    const { data } = await this.http.request<CompaniesInterface>({
      method: 'PUT',
      url: `${this.baseUrl}/${companyId}`,
      data: company,
    });

    return data;
  }
}