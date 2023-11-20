"use client";
import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  Grid,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import articleLinks from "@/const/articles";

export default function Articles() {
  const tags = [
    { value: "univ", label: "univ", color: "" },
    { value: "tech", label: "tech", color: "secondary" },
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setSelectedTags(
      selectedTags.includes(target)
        ? selectedTags.filter((item) => item !== target)
        : [...selectedTags, target]
    );
  };

  const filteredLinks =
    selectedTags.length > 0
      ? articleLinks().filter((article) =>
          selectedTags.includes(article.keys[0])
        )
      : articleLinks();

  return (
    <Box>
      <Typography>書いたもの</Typography>
      <FormGroup row>
        {tags.map((tag, index) => {
          return (
            <FormControlLabel
              key={index}
              control={<Checkbox value={tag.value} onChange={onchange} />}
              label={tag.label}
            />
          );
        })}
      </FormGroup>
      <Box component="ul">
        {filteredLinks.map((link, index) => {
          return (
            <li key={index}>
              <MuiLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Grid container>
                  <Grid item xs={12}>
                    {link.title}
                  </Grid>
                  <Grid item>
                    <Typography>
                      {link.date} {link.platform}
                    </Typography>
                  </Grid>
                </Grid>
              </MuiLink>
            </li>
          );
        })}
      </Box>
    </Box>
  );
}
