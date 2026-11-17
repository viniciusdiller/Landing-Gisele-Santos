"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mantém a URL limpa (sem "#secao") ao navegar para as seções da landing.
 * - Clique em link para seção da mesma página: rola até ela sem alterar a URL.
 * - Chegada de outra página (ex.: "/#imoveis"): rola até a seção e remove o hash.
 */
export function CleanHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      // O next/link respeita defaultPrevented e não altera a URL;
      // o onClick do próprio link (ex.: fechar menu mobile) continua rodando.
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.addEventListener("click", handleClick, true);
    return () => window.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    const { hash, pathname: currentPath, search } = window.location;
    if (!hash) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ block: "start" });
    window.history.replaceState(window.history.state, "", currentPath + search);
  }, [pathname]);

  return null;
}
