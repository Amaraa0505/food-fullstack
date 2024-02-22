/* eslint-disable @next/next/no-img-element */
"use client";
import { faker } from "@faker-js/faker";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/iconify";

import AppTasks from "./app-tasks";
import AppNewsUpdate from "./app-news-update";
import AppOrderTimeline from "./app-order-timeline";
import AppCurrentVisits from "./app-current-visits";
import AppWebsiteVisits from "./app-website-visits";
import AppWidgetSummary from "./app-widget-summary";
import AppTrafficBySite from "./app-traffic-by-site";
import AppCurrentSubject from "./app-current-subject";
import AppConversionRates from "./app-conversion-rates";
import { useState } from "react";
import { redirect } from "next/navigation";

// ----------------------------------------------------------------------

export default function AppView() {

  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem("user") || "")
  );

  if (!user) {
    redirect("/login");
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {/* Сайн уу, Тавтай морил - {user.name} */}
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Долоо хоног худалдан авалт"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Нийт хэрэглэгчид"
            total={1352831}
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Нийт захиалга"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Нийт дүн"
            total={234}
            color="error"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />
            }
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Нийт худалдан авалт"
            subheader="(+43%) өнгөрсөн жилээс"
            chart={{
              labels: [
                "01/01/2024",
                "02/01/2024",
                "03/01/2024",
                "04/01/2024",
                "05/01/2024",
                "06/01/2024",
                "07/01/2024",
                "08/01/2024",
                "09/01/2024",
                "10/01/2024",
                "11/01/2024",
              ],
              series: [
                {
                  name: "Альфа баг",
                  type: "column",
                  fill: "solid",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Бета баг",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Делта баг",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Хоолны төрөл"
            chart={{
              series: [
                { label: "Махан", value: 4344 },
                { label: "Үндсэн", value: 5435 },
                { label: "Зууш", value: 1443 },
                { label: "Цагаан хоол", value: 4443 },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: "Italy", value: 400 },
                { label: "Japan", value: 430 },
                { label: "China", value: 448 },
                { label: "Canada", value: 470 },
                { label: "France", value: 540 },
                { label: "Germany", value: 580 },
                { label: "South Korea", value: 690 },
                { label: "Netherlands", value: 1100 },
                { label: "United States", value: 1200 },
                { label: "United Kingdom", value: 1380 },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: [
                "English",
                "History",
                "Physics",
                "Geography",
                "Chinese",
                "Math",
              ],
              series: [
                { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
                { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
                { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> */}

        <Grid xs={12}>
          <AppOrderTimeline
            title="Сүүлийн захиалгууд"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                "1983, orders, $4220",
                "12 Invoices have been paid",
                "Order #37745 from September",
                "New order placed #XF-2356",
                "New order placed #XF-2346",
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: "FaceBook",
                value: 323234,
                icon: (
                  <Iconify
                    icon="eva:facebook-fill"
                    color="#1877F2"
                    width={32}
                  />
                ),
              },
              {
                name: "Google",
                value: 341212,
                icon: (
                  <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />
                ),
              },
              {
                name: "Linkedin",
                value: 411213,
                icon: (
                  <Iconify
                    icon="eva:linkedin-fill"
                    color="#006097"
                    width={32}
                  />
                ),
              },
              {
                name: "Twitter",
                value: 443232,
                icon: (
                  <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />
                ),
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: "1", name: "Create FireStone Logo" },
              { id: "2", name: "Add SCSS and JS files if required" },
              { id: "3", name: "Stakeholder Meeting" },
              { id: "4", name: "Scoping & Estimations" },
              { id: "5", name: "Sprint Showcase" },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
