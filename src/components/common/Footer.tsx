import Anchor from "./Anchor";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // 現在の年を動的に取得

  return (
    <footer className="px-4 py-4 flex justify-end items-center mt-auto">
      <p className="text-sm font-sans">
        imaged by{" "}
        <Anchor url="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E7%A9%8F%E3%82%84%E3%81%8B%E3%81%AA%E6%B5%B7%E3%81%AB%E6%B2%88%E3%82%80%E7%A9%8F%E3%82%84%E3%81%8B%E3%81%AA%E5%A4%95%E6%97%A5-lneox9o1MjU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Henrique Ferreira
        </Anchor>
      </p>
    </footer>
  );
}
