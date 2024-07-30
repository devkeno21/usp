import { Anchor, Box, Breadcrumbs } from "@mantine/core";
import { IconHome, IconHome2 } from "@tabler/icons-react";
import Link from "next/link";

export const Breadcrumb = ({links}:any) => {
  const items =links.map((item:any, index:number) => (
    <Link href={item.href} key={index} className="text-white flex gap-4 justify-center items-center">
      {item.title === "Home" &&<IconHome size={16}/>}{item.title}
    </Link>
  ));
  return (
    <Box className="bg-primary-900 px-5 py-10" style={{
      backgroundImage: `url(/form-bg.svg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Breadcrumbs separator={<p className="text-white text-3xl">|</p>} separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </Box>
  );
};
