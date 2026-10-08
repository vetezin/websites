"use client";

import { useRef } from "react";
import { zero18 } from "@/data/zero18";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <details className="menu" ref={menuRef}>
      <summary aria-label="Abrir menu"><span /><span /><span /></summary>
      <nav aria-label="Navegação mobile">
        <a href="#bebidas" onClick={closeMenu}>Bebidas</a>
        <a href="#localizacao" onClick={closeMenu}>Localização</a>
        <a href={zero18.instagramUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Instagram ↗</a>
        <a href={zero18.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>WhatsApp ↗</a>
      </nav>
    </details>
  );
}
