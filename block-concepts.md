-[main]
	package { name: string }

-[main]
	import
		{ types }*
	
-[main]
	rule { name: string } { [no-loop,loop] }
	when
	*	{ condition }
	then
	*	{ action }
	end

-[condition]
	match fact of { type } with
	*	{ matchers }

-[matcher]
	*	not { matcher }

-[matcher]
	*	fact available with { property-name: string  } { [matching, not matching] } { property-value }

-[matcher]
	*	fact available with { property-name: string  }

-[action]
	*	insert question { question id: string }
