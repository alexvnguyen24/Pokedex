const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CX2ahaoU.js","app":"_app/immutable/entry/app.DN12iJrA.js","imports":["_app/immutable/entry/start.CX2ahaoU.js","_app/immutable/chunks/entry.D4s9ras4.js","_app/immutable/chunks/scheduler.D9Mk-h9A.js","_app/immutable/chunks/index.B9vKkvdH.js","_app/immutable/entry/app.DN12iJrA.js","_app/immutable/chunks/scheduler.D9Mk-h9A.js","_app/immutable/chunks/index.Dn5RPZp8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BQtR5KBj.js')),
			__memo(() => import('./chunks/1-Df2SRtvH.js')),
			__memo(() => import('./chunks/2-3fiaT-6r.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
