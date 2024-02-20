import Meta from "@/dtos/meta";
import api from "./api";
import SystemRequirement from "@/dtos/systemRequirement";

interface SystemRequirementsIndexData {
  system_requirements: SystemRequirement[];
  meta: Meta;
}

const SystemRequirements = {
  index: (url: string) => {
    return api
      .get<SystemRequirementsIndexData>(url)
      .then((response) => response.data);
  },
};

export default SystemRequirements;
