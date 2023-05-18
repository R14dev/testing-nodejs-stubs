import Service from "./index.js";
const END_POINT_01 = "https://swapi.dev/api/planets/1/";
const END_POINT_02 = "https://swapi.dev/api/planets/2/";
import sinon from "sinon";
import { deepStrictEqual } from "assert";
const expected = {
  alderaan: "./mocks/Alderaan.json",
  totonne: "./mocks/totonne.json",
};
(async () => {
  const service = new Service();
  const comSinonStub = sinon.stub(service, service.service.name);
  comSinonStub.withArgs(END_POINT_02).resolves(expected.alderaan);
  comSinonStub.withArgs(END_POINT_01).resolves(expected.totonne);

  {
    const servicesStub = new Service();
    const Stub = await servicesStub.service(END_POINT_01);
    const responseData = await servicesStub.responseData(END_POINT_01);
    const Expecteds = {};

   // deepStrictEqual(responseData, Expecteds);
  }
  {
    const servicesStub = new Service();
    const Stub = await servicesStub.service(END_POINT_01);
    const responseData = await servicesStub.responseData(END_POINT_01);

    const Expecteds = {
        name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465'
    };
    deepStrictEqual(responseData, Expecteds);
  }
})();
