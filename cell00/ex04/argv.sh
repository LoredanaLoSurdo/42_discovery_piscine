if [ $# -lt 1 ]
then
	echo "No arguments supplied"
elif [ $# -gt 3 ]
then
	echo "More than 3 arguments supplied"
else
	for arg in $@
	do
		echo "$arg"
		done
fi
