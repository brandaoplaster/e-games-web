import Product from "@/dtos/product";
import CategoriesService from "@/services/categories";
import SystemRequirementsService from "@/services/systemrequirements";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";

interface ProductFormProps {
  handleSubmit: (product: FormData) => Promise<void>;
  action?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({
  handleSubmit,
  action = "Add",
}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("available");
  const [image, setImage] = useState<File>();

  const [mode, setMode] = useState("pve");
  const [releaseDate, setReleaseDate] = useState("");
  const [developer, setDeveloper] = useState("");

  const [systemRequirement, setSystemRequirement] = useState(1);

  const [productImage, setProductImage] = useState("");

  const product: Product = useSelector((state) => state.product);

  const router = useRouter();
  const dispatch = useDispatch();

  const { data, error } = useSWR(
    "/admin/v1/categories?length=999",
    CategoriesService.index
  );

  const { data: systemRequirementsData, error: systemRequirementsError } =
    useSWR(
      "/admin/v1/system_requirements?length=999",
      SystemRequirementsService.index
    );

  return <h1></h1>;
};

export default ProductForm;
