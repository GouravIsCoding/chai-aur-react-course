import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.aprWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
      } else return userAccount;
    } catch (err) {
      console.log(err);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      console.log(err);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log(err);
      console.log(err);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthService();
