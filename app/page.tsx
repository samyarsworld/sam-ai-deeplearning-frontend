import { ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import "./card.css";

export default function Main() {
  return (
    <div>
      <div className="grid">
        {ITEMS.map((item) => (
          <Link href={item.href} key={item.id}>
            <div className={`card card${item.id}`}>
              <span className="icon">
                <span className="svg-image">
                  <Image src={item.img} alt="logo" width={30} height={30} />
                </span>
              </span>
              <h4>{item.name}</h4>
              <p style={{ textAlign: "justify" }}>{item.desc}</p>
              <div className="background">
                <div className="tiles">
                  <div className={`tile tile${item.id} tile-1`}></div>
                  <div className={`tile tile${item.id} tile-2`}></div>
                  <div className={`tile tile${item.id} tile-3`}></div>
                  <div className={`tile tile${item.id} tile-4`}></div>

                  <div className={`tile tile${item.id} tile-5`}></div>
                  <div className={`tile tile${item.id} tile-6`}></div>
                  <div className={`tile tile${item.id} tile-7`}></div>
                  <div className={`tile tile${item.id} tile-8`}></div>

                  <div className={`tile tile${item.id} tile-9`}></div>
                  <div className={`tile tile${item.id} tile-10`}></div>
                </div>

                <div className={`line line${item.id} line-1`}></div>
                <div className={`line line${item.id} line-2`}></div>
                <div className={`line line${item.id} line-3`}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
