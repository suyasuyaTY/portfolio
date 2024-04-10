import Image from 'next/image';

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
};

export function Profile() {
  return (
    <div className="max-w-4xl mx-auto pb-16">
      <div className="flex justify-between mb-4  h-72">
        <div className="flex items-center">
          <Image src="/myIcon.jpg" alt="myicon" width={256} height={256} style={imageStyle} />
        </div>
        <div className="h-full w-2/3 ml-4 flex flex-col">
          <h3 className="text-3xl border-b-4 border-cyan-200">
            TY<span className="text-base">(@suyasuyaTY)</span>
          </h3>
          <div className="flex-1 my-4">
            <h4 className="text-xs">所属</h4>
            <p>東京工業大学情報通信系 (21B)</p>
            <p>Titech App Project</p>
          </div>
          <div className="flex-1 my-4">
            <h4 className="text-xs">趣味</h4>
            <p>ボカロ / プロセカ / スプラ</p>
          </div>
          <div className="flex-1 mt-4">
            <h4 className="text-xs">好きな言葉</h4>
            <p>やさしいインターネット</p>
          </div>
        </div>
      </div>
    </div>
  );
}
