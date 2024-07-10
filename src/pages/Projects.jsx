import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcsIMG from "../assets/projectsResim/Rectangle 41.png";
import AcsIMG2 from "../assets/projectsResim/Rectangle 42.png";
import AcsIMG3 from "../assets/projectsResim/Rectangle 43.png";
import { useSelector } from "react-redux";

export default function Projects() {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const projeData = data[0][0].projects;

  // Proje resimlerini map ile ilişkilendir
  const resimler = {
    0: AcsIMG,
    1: AcsIMG2,
    2: AcsIMG3,
  };

  return (
    <>
      <h2>Projects</h2>
      <div className="flex flex-wrap gap-4">
        {projeData.map((proje, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image={resimler[index]} // Index’e göre resmi göster
              title={proje.title} // Proje başlığını başlık olarak kullan
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {proje.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {proje.text}
              </Typography>
            </CardContent>
            <CardContent>
              <div className="flex gap-4 ">
                <div className="p-1 mb-2 w-16 rounded text-[rgba(55,48,163,1)] border-2 border-solid border-[rgba(55,48,163,1)]  ">
                  <Typography variant="body2" component="p">
                    react
                  </Typography>
                </div>
                <div className="p-1 mb-2 w-16 rounded text-[rgba(55,48,163,1)] border-2 border-solid border-[rgba(55,48,163,1)]">
                  <Typography variant="body2" component="p">
                    redux
                  </Typography>
                </div>
                <div className="p-1 mb-2 w-16 rounded text-[rgba(55,48,163,1)] border-2 border-solid border-[rgba(55,48,163,1)]">
                  <Typography variant="body2" component="p">
                    axios
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <button
                href="#"
                className="text-[rgba(55,48,163,1)] bg-white border-none"
              >
                Github
              </button>
              <button
                href="#"
                className="text-[rgba(55,48,163,1)] bg-white border-none"
              >
                View Site
              </button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
