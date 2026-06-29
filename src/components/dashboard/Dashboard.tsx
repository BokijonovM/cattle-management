"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useAppSelector } from "@/store/hooks";
import { getAnalytics } from "@/lib/analytics";
import StatCard from "./StatCard";

export default function Dashboard() {
  const cattle = useAppSelector((s) => s.cattle.items);
  const a = getAnalytics(cattle);

  const statusData = a.byStatus
    .filter((s) => s.value > 0)
    .map((s, i) => ({ id: i, label: s.label, value: s.value }));

  const genderData = a.byGender
    .filter((g) => g.value > 0)
    .map((g, i) => ({ id: i, label: g.label, value: g.value }));

  const brandPalette = ["#7c3aed", "#a78bfa", "#d97706", "#5b21b6", "#c4b5fd"];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box
        sx={{
          display: "grid", gap: 1,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
        }}
      >
        <StatCard label="Jami chorva" value={a.total} icon={<PetsIcon />} />
        <StatCard label="Faol poda" value={a.activeHerd} icon={<Inventory2Icon />} color="secondary.main" />
        <StatCard label="O'rtacha yosh" value={`${a.avgAge.toFixed(1)} yil`} icon={<CakeIcon />} color="#5b21b6" />
        <StatCard label="Sog'lom" value={a.byStatus.find((s) => s.key === "healthy")?.value ?? 0} icon={<FavoriteIcon />} color="#16a34a" />
      </Box>

      <Box sx={{ display: "grid", gap: 1, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
              Status boyicha taqsimot
            </Typography>
            {statusData.length
              ? <PieChart series={[{ data: statusData, innerRadius: 40 }]} colors={brandPalette} height={260} />
              : <Empty />}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
              Jins nisbati
            </Typography>
            {genderData.length
              ? <PieChart series={[{ data: genderData }]} colors={brandPalette} height={260} />
              : <Empty />}
          </CardContent>
        </Card>
      </Box>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
            Zot boyicha soni
          </Typography>
          {a.byBreed.length ? (
            <BarChart
              xAxis={[{ scaleType: "band", data: a.byBreed.map((b) => b.label) }]}
              series={[{ data: a.byBreed.map((b) => b.value), color: "#7c3aed" }]}
              height={300}
            />
          ) : <Empty />}
        </CardContent>
      </Card>
    </Box>
  );
}

function Empty() {
  return (
    <Box sx={{ py: 6, textAlign: "center", color: "text.secondary" }}>
      <Typography variant="body2">Malumot yoq</Typography>
    </Box>
  );
}