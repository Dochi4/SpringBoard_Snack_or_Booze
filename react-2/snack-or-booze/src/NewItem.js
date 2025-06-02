import { React, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function NewItem({ itemList, treatType }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
      id: formData.name.toLowerCase().replace(/\s+/g, "-"),
    };
    itemList.push(newItem);
    navigate(`/${treatType}`);
  };

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold text-center">
            {treatType.toUpperCase()} ADD
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Add Item Name"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                placeholder="Add Description"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="recipe">Recipe</Label>
              <Input
                type="text"
                name="recipe"
                id="recipe"
                value={formData.recipe}
                placeholder="Add Recipe"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="serve">Serve</Label>
              <Input
                type="text"
                name="serve"
                id="serve"
                value={formData.serve}
                placeholder="Add Serving Info"
                onChange={handleChange}
              />
            </FormGroup>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItem;

// Made with the assistance of :

// --- https://joyis.tistory.com/entry/React%EC%97%90%EC%84%9C-JSON-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A1%9C-%EC%A0%84%EC%86%A1

// --- https://reactstrap.github.io/?path=/docs/components-forms--form
