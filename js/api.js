const baseRequest = async ({ urlPath = "", method = "GET", body }) => {
  try {
      const reqParams = {
          method,
          headers: {
          "Content-Type": "application/json",
          },
      };

      if (body) {
          reqParams.body = JSON.stringify(body);
          console.log(reqParams.body)
      }
      return await fetch(`${urlPath}`, reqParams);
  } catch (error) {
      console.error("HTTP ERROR: ", error);
  }
};


export const getAllEquipments = async () => {
  const rawResponse = await baseRequest({urlPath: `http://localhost:8080/equipment/`, method: "GET" });
  return await rawResponse.json();
};

export const postEquipment = (body) => baseRequest({urlPath: `http://localhost:8080`,method: "POST", body });

export const updateEquipment = (id, body) =>
  baseRequest({ urlPath: `http://localhost:8080/equipment/${id}`, method: "PUT", body });

export const deleteEquipment = (id) =>
  baseRequest({ urlPath: `http://localhost:8080/equipment/${id}`, method: "DELETE" });