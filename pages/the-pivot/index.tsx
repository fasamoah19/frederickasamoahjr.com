import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: "/",
      permanent: false
    }
  }

}

export default function ThePivotPage() {
  return (
    <></>
  )
}