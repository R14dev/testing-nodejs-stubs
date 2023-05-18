import { get } from "https";
const END_POINT_01 = "https://swapi.dev/api/planets/1/";
import { readFile } from "fs/promises";
class Service {
  async service(url) {
    return new Promise((resolve, reject) => {
      get(url, (res) => {
        res.on("data", (data) => {
          resolve(JSON.parse(data));
        });
        res.on("error", (err) => {
          reject(err);
        });
      });
    });
  }

  async fromLocal(file) {
    return JSON.parse((await readFile(file)).toString("utf8"));
  }

  async responseData(url) {
    const result = await this.service(url);
    return {
      name: result.name,
      rotation_period: result.rotation_period,
      orbital_period: result.orbital_period,
      diameter: result.diameter,
    };
  }
}

/*
(async () => {
  const service = new Service()
  const requests = await service.responseData(END_POINT_01);
  console.log(requests)
})();
*/
export default Service;
