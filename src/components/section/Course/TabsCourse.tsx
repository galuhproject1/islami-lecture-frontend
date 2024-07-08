import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import TabOne from "./Tabs/TabOne";
import TabTwo from "./Tabs/TabTwo";
import TabFour from "./Tabs/TabFour";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

type Props = {
  inClass: boolean;
};
const TabsCourse = ({ inClass }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event.preventDefault();
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        backgroundColor: "white",
        padding: 2,
        borderRadius: "8px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="secondary"
          sx={{
            ".MuiTabs-button-selected": {
              fontWeight: 700,
            },
          }}
        >
          <Tab
            label="Overview"
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              "&.Mui-selected": {
                fontWeight: 700,
              },
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Modul Pembelajaran"
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              "&.Mui-selected": {
                fontWeight: 700,
              },
            }}
            {...a11yProps(1)}
          />
          <Tab
            label={inClass ? "Tools" : "QnA"}
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              "&.Mui-selected": {
                fontWeight: 700,
              },
            }}
            {...a11yProps(2)}
          />
          <Tab
            label={inClass ? "Ulasan" : "Information"}
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              "&.Mui-selected": {
                fontWeight: 700,
              },
            }}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabOne />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabTwo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabOne />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TabFour label={inClass ? "Ulasan" : "Information"} />
      </CustomTabPanel>
    </Box>
  );
};

export default TabsCourse;
